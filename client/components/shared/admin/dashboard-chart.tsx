"use client";

import { useTheme } from "next-themes";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type LevelData = {
  level: string;
  boys: number;
  girls: number;
};

interface Props {
  data: LevelData[];
}

export default function LevelGenderChart({ data }: Props) {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Students by Class (Boys vs Girls)</CardTitle>
      </CardHeader>

      <CardContent className="h-100">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={isDark ? "#374151" : "#e5e7eb"}
            />

            <XAxis dataKey="level" stroke={isDark ? "#d1d5db" : "#374151"} />

            <YAxis stroke={isDark ? "#d1d5db" : "#374151"} />

            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#1f2937" : "#ffffff",
                border: "none",
                borderRadius: "8px",
                color: isDark ? "#ffffff" : "#000000",
              }}
            />

            <Legend />

            <Bar dataKey="boys" name="Boys" radius={[6, 6, 0, 0]} />
            <Bar dataKey="girls" name="Girls" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
