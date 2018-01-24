import React from 'react';
import { Container, Text, Button, Content } from 'native-base';
import MenuScreen from  './menu';

class Logout extends React.Component {
  handleLogout = () => {
    return this.props.screenProps.changeLoginState(false);
  };


  // nPress={this.handleLogout}> vaka bese prethodno
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Button full 
          onPress={() =>
          navigate('MenuScreen')} >
            <Text>Log Out</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Logout;