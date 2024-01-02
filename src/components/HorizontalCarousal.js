import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;

const HorizontalCarousal = ({ data }) => {
  const flatListRef = React.useRef(null);
  const [prevDisabled, setPrevDisabled] = React.useState(false);
  const [nextDisabled, setNextDisabled] = React.useState(false);

  const [activeIndex, setActiveIndex] = React.useState(0);

  const onPrevious = () => {
    if (activeIndex === 0) return;
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: activeIndex - 1,
      });
    }
  };
  const onNext = () => {
    if (activeIndex === data.length - 1) return;
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: activeIndex + 1,
      });
    }
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <FlatList
        ref={flatListRef}
        // snapToInterval={SCREEN_WIDTH}
        // snapToAlignment="center"
        // decelerationRate={"fast"}
        pagingEnabled={true}
        horizontal
        onScroll={(event) => {
          const pageIndex = Math.round(
            event.nativeEvent.contentOffset.x / SCREEN_WIDTH
          );
          console.log({ pageIndex });
          setActiveIndex(pageIndex);
        }}
        //can i set 0 -16 scrollEventThrottle={0}
        scrollEventThrottle={0}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          if (!item.image) return <View style={{ width: 0 }} />;
          return (
            <View
              style={{
                width: SCREEN_WIDTH,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
              <Image source={item?.image} style={styles.image} />
              <Text style={styles.imageText}>{item.title}</Text>
            </View>
          );
        }}
      />
      <View style={styles.footer}>
        <Text
          onPress={onPrevious}
          disabled={prevDisabled}
          style={styles.btnText}
        >
          ◀️
        </Text>

        {data.map((_, index) => (
          <View
            key={index}
            style={{
              padding: 5,
              width: SCREEN_WIDTH - 350,
              borderRadius: 5,
              height: "3%",
              backgroundColor: index === activeIndex ? "black" : "transparent",
              borderWidth: "0.4",
              borderColor: "black",
            }}
            onPress={() => handlePageChange(index)}
          />
        ))}

        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Ionicons
            style={styles.galleryicon}
            color={Colors.primaryColor}
            name={"image-outline"}
            size={hp("3.5")}
          />
          <Text
            style={{
              textAlign: "right",
              color: "#05253A",
              fontSize: "10%",
            }}
          >
            {`${activeIndex + 1}/${data.length}`}
          </Text>
        </View> */}
        <Text onPress={onNext} disabled={nextDisabled} style={styles.btnText}>
          ▶️
        </Text>
      </View>
    </View>
  );
};

export default HorizontalCarousal;

const styles = StyleSheet.create({
  image: {
    width: "95%",
    height: SCREEN_WIDTH - 10,
    resizeMode: "contain",
    borderRadius: 10,
  },
  imageText: {
    position: "absolute",
    top: 15,
    right: 15,
    color: "white",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
  },
  btnText: {
    fontSize: 30,
  },
  paginationStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "-8%",
    backgroundColor: "rgba(255,255,255,0.35)",
    height: "8%",
    borderRadius: 10,
    paddingHorizontal: "9%",
  },
});
