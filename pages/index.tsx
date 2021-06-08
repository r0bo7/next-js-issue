import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <AppLayout selectedKey="operation" openKey="establishment">
        <h1>Hello World</h1>
      </AppLayout>
    )
  );
}
