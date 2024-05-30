import React, { useState, useRef } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, PanResponder, PanResponderInstance, Animated } from 'react-native';

const { width } = Dimensions.get('window');

const TestSquareDraggable: React.FC = () => {
  const [droppedColor, setDroppedColor] = useState<string | null>(null);
  const [draggingKey, setDraggingKey] = useState<string | null>(null);
  const dropZoneRef = useRef<View>(null);

  const squares = [
    { color: 'red', key: '1' },
    { color: 'green', key: '2' },
    { color: 'blue', key: '3' },
  ];

  const panValues = squares.reduce((acc, square) => {
    acc[square.key] = useRef(new Animated.ValueXY()).current;
    return acc;
  }, {} as { [key: string]: Animated.ValueXY });

  const panResponderRefs: { [key: string]: PanResponderInstance } = {};

  squares.forEach(square => {
    panResponderRefs[square.key] = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setDraggingKey(square.key);
        panValues[square.key].setOffset({
          x: panValues[square.key].x._value,
          y: panValues[square.key].y._value,
        });
        panValues[square.key].setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event(
        [null, { dx: panValues[square.key].x, dy: panValues[square.key].y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (_, gestureState) => {
        dropZoneRef.current?.measure((fx, fy, width, height, px, py) => {
          if (
            gestureState.moveX >= px &&
            gestureState.moveX <= px + width &&
            gestureState.moveY >= py &&
            gestureState.moveY <= py + height
          ) {
            setDroppedColor(square.color);
          }
        });
        panValues[square.key].flattenOffset();
        Animated.spring(panValues[square.key], {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start(() => setDraggingKey(null));
      },
    });
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
        {squares.map(square => (
          <Animated.View
            key={square.key}
            style={[
              styles.square,
              { backgroundColor: square.color },
              { transform: panValues[square.key].getTranslateTransform() },
              draggingKey === square.key && styles.draggingSquare,
            ]}
            {...panResponderRefs[square.key].panHandlers}
          />
        ))}
      </ScrollView>
      <View style={styles.droppableContainer}>
        <View ref={dropZoneRef} style={styles.droppableSquare}>
          {droppedColor ? (
            <View style={[styles.filledSquare, { backgroundColor: droppedColor }]} />
          ) : (
            <View style={styles.dashedSquare} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  square: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  draggingSquare: {
    zIndex: 1,
  },
  droppableContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  droppableSquare: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filledSquare: {
    width: '100%',
    height: '100%',
  },
  dashedSquare: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: '#000',
    borderStyle: 'dashed',
  },
});

export default TestSquareDraggable;
