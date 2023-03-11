import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button } from "../../components/button";
import { toggleTheme } from "../../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { getColor } from "../../utils/functions";
import { SafeAreaView } from "react-native-safe-area-context";
import { TaskCard, Date, LargeCard } from "../../components";
import { JsonCalendar } from "json-calendar";
import { FontAwesome } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";

export const HomeScreen = () => {
  const db = SQLite.openDatabase("newDatabase.db");
  const dispatch = useDispatch();
  const calendar = new JsonCalendar();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const mode = useSelector((state) => state.theme.theme);
  const [active, setActive] = useState();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists tasks (id integer primary key not null, title text, date text, dateId text, checklist text);"
      ),
        [],
        (tx, results) => {
          console.log("Results", results);
        },
        (tx, error) => {
          console.log("Error", error);
        };
    });
  }, []);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from tasks",
        [],
        (tx, results) => {
          console.log(results.rows._array);
          setTasks(results.rows._array);
        },
        (tx, error) => {
          console.log("Error", error);
        }
      );
    });
  }, []);

  // useEffect(() => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "drop table dos",
  //       [],
  //       (tx, results) => {
  //         console.log("Table Deleted");
  //       },
  //       (tx, error) => {
  //         console.log("Error", error);
  //       }
  //     );
  //   });
  // }, []);

  const getProgress = (task) => {
    const checklist = JSON.parse(task.checklist);
    console.log(checklist);
    const total = checklist?.length;
    const completed = checklist?.filter((item) => item.done == true).length;
    if (total == 0) return 0;
    if (completed == 0) return 0;
    return (completed / total) * 100;
  };

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: getColor("primaryBg", mode) },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 200,
              }}
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
              }}
            />
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  color: getColor("primaryText", mode),
                  fontWeight: "bold",
                }}
              >
                Perfect Gift IZIHIRWE
              </Text>
              <Text
                style={{
                  color: getColor("secondaryText", mode),
                }}
              >
                2 tasks today
              </Text>
            </View>
          </View>
          <View>
            <Button onPress={handleThemeChange}>
              <FontAwesome
                name={mode == "light" ? "moon-o" : "sun-o"}
                size={24}
                color={mode == "light" ? "black" : "white"}
              />
            </Button>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text
            style={{ color: getColor("primaryText", mode), fontWeight: "bold" }}
          >
            Recent Tasks
          </Text>
        </View>
        <ScrollView
          style={{
            marginTop: 20,
            width: "100%",
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {tasks?.map((task) => {
            return <TaskCard title={task.title} progress={getProgress(task)} />;
          })}
        </ScrollView>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text
            style={{ color: getColor("primaryText", mode), fontWeight: "bold" }}
          >
            View tasks
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {calendar.weeks.map((week) => {
              return week.map((day) => {
                return (
                  <Date
                    onPress={() => setActive(day.id)}
                    day={weekday[day.date.getDay()]}
                    date={day.date.getDate()}
                    active={active == day.id ? true : false}
                  />
                );
              });
            })}
          </ScrollView>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 20,
            width: "100%",
            height: 300,
          }}
        >
          <LargeCard title={"Go to the market"} progress={40} />
          <LargeCard title={"Go to the market"} progress={40} />
        </ScrollView>
        <StatusBar
          style={mode == "light" ? "dark" : "light"}
          backgroundColor={getColor("primaryBg", mode)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
