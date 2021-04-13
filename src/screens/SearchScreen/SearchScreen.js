import React, { PureComponent } from 'react'
import { 
    Text,
    SafeAreaView, 
    TouchableOpacity, 
    View,
    ScrollView,
    StyleSheet, 
    TextInput
} from 'react-native'

export default class SearchScreen extends PureComponent {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <SafeAreaView style= {{flex: 1, backgroundColor: '#fff'}} >
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                   <View style = {{flex: 1, justifyContent: 'center', paddingHorizontal: 21}}>
                      <View style= {{alignItems: 'center'}}>
                         <Text style={[Style.logoSub, {marginTop: 30}]}>Đăng Nhập</Text>
                      </View>  

                      <View style={{marginTop: 21, marginBottom: 10,}}>
                        <Text>Email </Text>
                        <TextInput 
                          placeholder="example@gmail.com"
                          keyboardType="email-address"
                          style={{ 
                            borderBottomColor: '#707070',
                            borderBottomWidth: 2,
                            paddingHorizontal: 5,
                            paddingVertical: 8,
                          }}/>
                      </View>

                      <View style={{marginBottom: 21, marginTop: 10,}}>
                        <Text>Mật Khẩu</Text>
                        <TextInput 
                         placeholder="password"
                         secureTextEntry={true}
                         style={{ 
                           borderBottomColor: '#707070',
                           borderBottomWidth: 2,
                           paddingHorizontal: 5,
                           paddingVertical: 8,
                           //fontSize: 16,
                          }} />
                      </View>

                      <TouchableOpacity 
                         onPress = { () => this.props.navigation.navigate('DashBoard')}
                         style={{alignItems: 'center',
                         backgroundColor: '#999', 
                         paddingVertical: 20,
                         }}>
                             <Text style={Style.buttonText}>Đăng Nhập</Text>
                      </TouchableOpacity>
                    </View>
                </ScrollView>  
        </SafeAreaView>  
    );
}
}

const Style = StyleSheet.create({
container: {
     alignItems: 'center',
 },
logoSub: {
    fontWeight: 'normal',
    fontSize: 26,
    color: '#001F45',
},
buttonText: {
  fontFamily: 'Roboto-Relugar',
  fontSize: 20,
  color: '#fff',
  textAlign: 'center',
},
});

