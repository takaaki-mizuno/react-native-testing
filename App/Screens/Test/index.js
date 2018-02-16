import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

import WiFi from './home_images/WiFi.png'
import MobileSignal from './home_images/MobileSignal.png'
import Battery from './home_images/Battery.png'
import iconMenu from './home_images/iconMenu.png'
import Oval4 from './home_images/Oval4.png'
import Rectangle from './home_images/Rectangle.png'

export default class index extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch',
        paddingTop: 20,
        backgroundColor: '#8EA1AF'}}>
        <View style={styles.bg}>
          <View style={styles._1}>
            <View style={styles.bg_15}>
              <View style={styles.head}>
                <View style={styles.mHead}>
                  <View style={styles.BarsStatusWhite}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.OverridesStatusBarSignalWhite}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.Carrier}>Sketch</Text>
                          <Image source={WiFi} style={styles.WiFi} />
                          <Image source={MobileSignal} style={styles.MobileSignal} />
                        </View>
                      </View>
                      <Text style={styles.Time}>9:41 AM</Text>
                      <View style={styles.PinRight}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles._100}>100%</Text>
                          <Image source={Battery} style={styles.Battery} />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={iconMenu} style={styles.iconMenu} />
                    <Text style={styles._26}>ホーム</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <View style={styles.tabs}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles._1_21}>
                        <View style={styles.guide_22}>
                          <Text style={styles._23}>スコア履歴</Text>
                        </View>
                      </View>
                      <View style={styles._2_17}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.guide}>
                            <Text style={styles._20}>分析</Text>
                          </View>
                          <View style={styles.current} />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.mCardUser}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bg_40}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles._41}>名無 権兵衛</Text>
                          <View style={styles.mTagYou}>
                            <View style={styles.bg_43}>
                              <Text style={styles._44}>あなた</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.avatarLeft1} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.oops}>oops!</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <Image source={Oval4} style={styles.Oval4} />
              <Image source={Rectangle} style={styles.Rectangle} />
              <View style={styles.mButtonNewscore} />
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    height: 667,
    backgroundColor: '#000000'
  },
  _1: {
    alignSelf: 'flex-start',
    height: 237,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  bg_15: {
    backgroundColor: '#8EA1AF'
  },
  head: {
    alignSelf: 'center',
    height: 51,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  mHead: {

  },
  BarsStatusWhite: {
    alignSelf: 'center',
    height: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  OverridesStatusBarSignalWhite: {
    width: 94,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Carrier: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  WiFi: {

  },
  MobileSignal: {

  },
  Time: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  PinRight: {
    width: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _100: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  Battery: {

  },
  iconMenu: {

  },
  _26: {
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  tabs: {
    height: 53,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _1_21: {
    width: 188,
    alignItems: 'center',
    justifyContent: 'center'
  },
  guide_22: {
    height: 52,
    width: 188,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _23: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: '400',
    color: '#BAC5CD',
    textAlign: 'center'
  },
  _2_17: {
    width: 188,
    alignItems: 'center',
    justifyContent: 'center'
  },
  guide: {
    height: 52,
    width: 188,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _20: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  current: {
    height: 2,
    backgroundColor: '#FFFFFF',
    width: 188
  },
  mCardUser: {
    width: 337,
    height: 117,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_40: {
    backgroundColor: '#FAFAFA',
    width: 335,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _41: {
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: '400',
    color: '#798E94',
    textAlign: 'left',
    marginLeft: 90
  },
  mTagYou: {
    width: 30,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_43: {
    height: 14,
    backgroundColor: '#D1D7DC',
    borderRadius: 2,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _44: {
    backgroundColor: 'transparent',
    fontSize: 8,
    fontWeight: '400',
    color: '#FFFFFF'
  },
  avatarLeft1: {
    width: 160,
    height: 99
  },
  oops: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginTop: 95,
    textAlign: 'left'
  },
  Oval4: {

  },
  Rectangle: {

  },
  mButtonNewscore: {
    width: 63,
    height: 64
  }
});

