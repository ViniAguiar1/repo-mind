import { MainLayout } from "./layouts/MainLayout";
import { ChatContainer } from "./features/chat/ChatContainer";

function App() {
  return (
    <MainLayout>
      <ChatContainer />
    </MainLayout>
  );
}

export default App;
