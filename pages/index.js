import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      new Notification("Visibility Changed", {
        body: "Welcome back! You are now viewing the tab.",
      });
    } else {
      new Notification("Visibility Changed", {
        body: "You've switched tabs or minimized the window.",
      });
    }
  };
  return (
    <>
      <div>
        <button className="container" onClick={() => {
          Notification.requestPermission().then(perm => {
            if (perm == "granted") {
              new Notification("Pushed Notification", {
                body: "This is a custom notification",
              });
            }
          })
        }}>Send Notification</button>
      </div>
    </>
  );
}


