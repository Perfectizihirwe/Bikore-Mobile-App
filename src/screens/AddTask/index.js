import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { InputArea, Date, Button } from "../../components";
import { getColor } from "../../utils/functions";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { JsonCalendar } from "json-calendar";
import { EvilIcons } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";

export const AddTask = ({ navigation }) => {
  const db = SQLite.openDatabase("newDatabase.db");
  const calendar = new JsonCalendar();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const mode = useSelector((state) => state.theme.theme);
  const [active, setActive] = useState();
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState();
  const [checklist, setChecklist] = useState([]);
  const [checklistItem, setChecklistItem] = useState();

  console.log(checklist);
  console.log(date);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists tasks (id integer primary key not null, title text, date text, dateId text, checklist text)",
        [],
        (tx, results) => {
          console.log("Table Created or exists");
        },
        (tx, error) => {
          console.log("Error", error);
        }
      );
    });
  }, []);

  const handleAddTask = () => {
    console.log("Adding task", title, date, active, JSON.stringify(checklist));
    setLoading(true);
    db.transaction((tx) => {
      tx.executeSql(
        "insert into tasks (title, date, dateId, checklist) values (?, ?, ?, ?)",
        [
          title,
          JSON.stringify(date),
          JSON.stringify(active),
          JSON.stringify(checklist),
        ],
        (tx, results) => {
          setLoading(false);
          console.log("Results", results);
          setActive();
          setTitle();
          setChecklist([]);
          setChecklistItem();
          navigation.navigate("Home");
        },
        (tx, error) => {
          setLoading(false);
          console.log("Error", error);
        }
      );
    });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: getColor("primaryBg", mode),
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 17,
            marginTop: 20,
            fontWeight: "bold",
            color: getColor("primaryText", mode),
          }}
        >
          Add a new task
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {calendar.weeks.map((week) => {
            return week.map((day) => {
              return (
                <Date
                  onPress={() => {
                    setActive(day.id);
                    setDate(day.date);
                  }}
                  day={weekday[day.date.getDay()]}
                  date={day.date.getDate()}
                  active={active == day.id ? true : false}
                />
              );
            });
          })}
        </ScrollView>
        <InputArea
          value={title}
          onChangeText={(text) => setTitle(text)}
          title={"Title"}
          placeholder={"Enter the tasks title"}
        />
        <InputArea
          title={"Checklist Item"}
          placeholder={"Enter a checklist item"}
          value={checklistItem}
          multiline={true}
          onChangeText={(text) => setChecklistItem(text)}
        >
          <TouchableOpacity
            onPress={() => {
              setChecklist([
                ...checklist,
                { item: checklistItem, done: false },
              ]);
              setChecklistItem("");
            }}
          >
            <EvilIcons
              name="plus"
              size={32}
              color={getColor("primaryText", mode)}
            />
          </TouchableOpacity>
        </InputArea>
        <ScrollView
          style={{
            padding: 10,
            height: 280,
          }}
          showsVerticalScrollIndicator={false}
        >
          {checklist.map((item, index) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                }}
              >
                <Text style={{ color: getColor("primaryText", mode) }}>
                  Item {index + 1} : {item.item}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setChecklist(checklist.filter((i) => i != item));
                  }}
                >
                  <EvilIcons
                    name="close"
                    size={24}
                    color={getColor("primaryText", mode)}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            padding: 35,
          }}
        >
          <Button
            title={loading ? "Adding..." : "Add Task"}
            onPress={handleAddTask}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
