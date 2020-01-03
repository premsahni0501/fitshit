import React from 'react';
import {ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {Layout, Button, Icon} from 'react-native-ui-kitten';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container, Row, Col} from '../components/_grid';
import {TextEl} from '../components/Text';
import {Banner} from '../components/home/Banner';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    minHeight: Dimensions.get('window').height - 120,
  },
  container: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  menuIcon: {
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBtn: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  rightBtnIcon: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
  },
  statisticCol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 64,
  },
  marginVertical: {
    marginVertical: 10,
  },
  scaleColor: {
    color: '#aaa',
  },
  actName: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

const activityData = [
  {
    name: 'Heart Rate',
    value: 131,
    scale: 'bpm',
    icon: 'heart',
    pack: 'feather',
    color: 'red',
  },
  {
    name: 'Colories',
    value: 450,
    scale: 'kcal',
    icon: 'whatshot',
    pack: 'material',
    color: 'orange',
  },
  {
    name: 'Steps',
    value: 6551,
    scale: 'steps',
    icon: 'directions-walk',
    pack: 'material',
    color: 'violet',
  },
  {
    name: 'Water',
    value: 4,
    scale: 'cups',
    icon: 'droplet',
    pack: 'feather',
    color: 'blue',
  },
];

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#fff',
      color: '#000',
      elevation: 0,
    },
    headerLeft: () => {
      return (
        <Button
          appearance="ghost"
          size="large"
          icon={style => (
            <Icon
              width={44}
              height={44}
              pack="feather"
              name="menu"
              fill="#000111"
              {...style}
            />
          )}
        />
      );
    },
    headerRight: () => {
      return (
        <Button
          appearance="ghost"
          size="large"
          icon={style => (
            <Icon
              width={44}
              height={44}
              pack="feather"
              name="shopping-bag"
              fill="#000111"
              {...style}
            />
          )}
        />
      );
    },
  };
  render() {
    const {navigation} = this.props;
    const renderIcon = ({icon, pack, color}) => (
      <Icon name={icon} fill={color} width={32} height={32} pack={pack} />
    );
    return (
      <ScrollView>
        <Container style={styles.mainContainer}>
          <Row>
            <Container style={{...styles.container}}>
              <Row>
                <Col>
                  <TextEl category="h2" style={{fontWeight: 'bold'}}>
                    Activities
                  </TextEl>
                  <Banner
                    imgSource={require('../assets/img/banner/summer_collection.jpg')}
                  />
                </Col>
              </Row>
              <Row>
                {activityData &&
                  activityData.map((act, index) => (
                    <Col size={6} key={index}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('StatModal')}
                        activeOpacity={0.8}
                        style={{...styles.card}}>
                        <Layout style={styles.marginVertical}>
                          {renderIcon(act)}
                        </Layout>
                        <TextEl category="h2" style={styles.marginVertical}>
                          {act.value}
                        </TextEl>
                        <TextEl category="h6" style={styles.scaleColor}>
                          {act.scale}
                        </TextEl>
                        <TextEl category="p2" style={styles.actName}>
                          {act.name}
                        </TextEl>
                      </TouchableOpacity>
                    </Col>
                  ))}
              </Row>
            </Container>
          </Row>
          <Row>
            <Col>
              <TouchableOpacity
                style={styles.statisticCol}
                onPress={() => navigation.navigate('StatModal')}>
                <TextEl
                  category="h5"
                  style={{color: '#eee', fontWeight: 'bold'}}>
                  Statistics
                </TextEl>
                <Icon
                  name="keyboard-arrow-up"
                  fill="#eee"
                  width={32}
                  height={32}
                  pack="material"
                />
              </TouchableOpacity>
            </Col>
          </Row>
        </Container>
      </ScrollView>
    );
  }
}
