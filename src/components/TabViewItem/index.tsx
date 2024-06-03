import {Tab, TabView, normalize} from '@rneui/themed';
import React from 'react';
import {CustomTabViewItemProps} from './types';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native';

const TabViewItem: React.FunctionComponent<CustomTabViewItemProps> = props => {
  const [index, setIndex] = React.useState(0);

  console.log(index)
  return (
    <View style={{flex: 1}}>
      <Tab
        containerStyle={styles.container}
        buttonStyle={props.tabStyle}
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.indicatorStyle}
        disableIndicator
        variant="default"
       >
        <Tab.Item titleStyle={index==0?styles.titleStyle1:styles.titleStyle2} buttonStyle={index==0?styles.tabStyle1:styles.tabStyle2} title={props.title1} />
        <Tab.Item titleStyle={index==0?styles.titleStyle2:styles.titleStyle1} buttonStyle={index==0?[styles.tabStyle2,styles.tabStyle1Override]:[styles.tabStyle1,styles.tabStyle2Override]} title={props.title2} />
      </Tab>

      <TabView
        containerStyle={props.viewStyle}
        value={index}
        onChange={setIndex}
        animationType="spring">
        <TabView.Item style={styles.containerTabView}>
          {props.screen1}
        </TabView.Item>
        <TabView.Item style={styles.containerTabView}>
          {props.screen2}
        </TabView.Item>
       
      </TabView>
    </View>
  );
};

export default TabViewItem;
