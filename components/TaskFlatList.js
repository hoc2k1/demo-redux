import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native';

export default class TaskFlatList extends Component {
  renderItem = ({item, index}) => {
    const { onDeleteItem } = this.props;

    return (
      <View style={ styles.itemContainer }>
        <View style={{ flex: 1 }}>
          <Text style={{ color: 'black'}}>{item.title}</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity style={{ marginTop: -2 }} onPress={ () => onDeleteItem(index) }>
            <Text>{`❌`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    const { listData } = this.props;
    console.log(listData);
    return(
      <FlatList
        data={listData}
        extraData={this.props}
        keyExtractor={ (item, index) => index }
        renderItem={ this.renderItem }
      />
    );
  }
}

const styles = StyleSheet.create({
  itemContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal : 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    borderColor: 'gray',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowColor: 'gray',
    elevation: 2
  }
});
