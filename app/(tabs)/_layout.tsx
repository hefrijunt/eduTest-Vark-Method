// app/(tabs)/_layout.tsx
import React from "react";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

// Import SVG (butuh react-native-svg + react-native-svg-transformer)
import IndexIcon from "@/assets/images/icons/home.svg";
import DiscussIcon from "@/assets/images/icons/discuss.svg";
import MessageIcon from "@/assets/images/icons/message.svg";
import SettingsIcon from "@/assets/images/icons/settings.svg";

import { SvgProps } from "react-native-svg"; // ✅ pakai ini

type TabIconProps = {
  color: string;
  size?: number;
  Icon: React.FC<SvgProps>;
  active?: boolean;
};

function TabIcon({ color, size = 28, Icon, active = false }: TabIconProps) {
  return <Icon width={active ? size + 6 : size} height={active ? size + 6 : size} fill={color} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000ff",
        tabBarInactiveTintColor: "#dadadaff",
        tabBarLabelStyle: { fontWeight: "bold" },
        tabBarStyle: { paddingBottom: 4, height: 60 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon Icon={IndexIcon} color={color} active={focused} />,
        }}
      />
      <Tabs.Screen
        name="discuss"
        options={{
          title: "Discuss",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon Icon={DiscussIcon} color={color} active={focused} />,
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: "Message",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon Icon={MessageIcon} color={color} active={focused} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon Icon={SettingsIcon} color={color} active={focused} />,
        }}
      />
    </Tabs>
  );
}
