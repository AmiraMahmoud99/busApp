import { store } from './src/redux/createStore';
import { persistStore } from 'redux-persist';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
 import { PersistGate } from 'redux-persist/lib/integration/react';
    
  
 

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      hasError: false
    };
  }

  initApp() {
    this.setState({ dataLoaded: true });
  }
 

   

  render() {

    return (
      <NativeBaseProvider theme={Theme}>
    
          <Provider store={store}>
            <PersistGate
              onBeforeLift={() => this.initApp()}
              persistor={persistStore(store)}
              loading={null}>
              <SSRProvider>

                <NavigationContainer linking={linking}
                  ref={navigationRef}

                  onStateChange={(newState) => {
                    routingInstrumentation.onRouteWillChange({
                      name: newState.routes[newState.routes.length - 1].name,
                      op: 'navigation'
                    })

                  }}

                >
                  {this.state.dataLoaded && (
                    <Main dataLoaded={this.state.dataLoaded} />

                  )}
                </NavigationContainer>

              </SSRProvider>
            </PersistGate>
          </Provider>
       </NativeBaseProvider>
    );
  }
}

export default Root