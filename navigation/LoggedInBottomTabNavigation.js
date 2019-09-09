import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer, TabBarBottom } from 'react-navigation';
import LoggedInBTN_HomeNavigation from './LoggedInBTN_HomeNavigation';
import LoggedInBTN_SearchNavigation from './LoggedInBTN_SearchNavigation';
import LoggedInBTN_FollowingNavigation from './LoggedInBTN_FollowingNavigation';
import LoggedInBTN_ProfileNavigation from './LoggedInBTN_ProfileNavigation';

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;

    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {
          badgeCount > 0 && (
            <View
              style={{
                // /If you're using react-native < 0.57 overflow outside of the parent
                // will not work on Android, see https://git.io/fhLJ8
                position: 'absolute',
                right: -6,
                top: -3,
                backgroundColor: 'red',
                borderRadius: 6,
                width: 12,
                height: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {badgeCount}
              </Text>
            </View>
          )
        }
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;

  if (routeName === 'Home') {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Profile') {
    iconName = `person${focused ? '' : '-outline'}`;

    return (
      <MaterialIcons 
        name={iconName} 
        size={30} 
        color={tintColor}
        style={{
          marginTop: 2
        }}
      />
    );
  }

  // You can return any component that you like here!
  return (
    <IconComponent 
      name={iconName} 
      size={25} 
      color={tintColor}
    />
  );
};

const AppNavigator = createBottomTabNavigator(
  {
    Home: { screen: LoggedInBTN_HomeNavigation },
    // Search: { screen: LoggedInBTN_SearchNavigation },
    // Following: { screen: LoggedInBTN_FollowingNavigation },
    Profile: { screen: LoggedInBTN_ProfileNavigation },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#272822',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const LoggedInBottomTabNavigation = createAppContainer(AppNavigator)

export default LoggedInBottomTabNavigation;