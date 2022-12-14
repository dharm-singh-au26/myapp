import React from "react";
import "./App.css";

import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import InLine from "./components/InLine";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter1 from "./components/Counter1";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Dharm">
        <ComponentC />
      </UserProvider>
      {/* <Counter1
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter1
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIN)=> isLoggedIN ? 'Dharm' : 'Guest'} /> */}
      {/* <ClickCounter/>
      <HoverCounter/> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <InLine/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <FunctionClick/>
      <ClassClick/>
      <EventBind/> */}
      {/* <Counter/> */}

      {/* <Message/> */}
      {/* <Greet name='Bruce' heroName='batman'>
        <p>This is a children tag</p>
      </Greet>
      <Greet name='live' heroName='spiderman'>
        <button>Action</button>
      </Greet> */}
      {/* class component */}
      {/* <Welcome name='Bruce' heroName='batman'/>
      <Welcome name='live' heroName='spiderman'/>
      <Welcome name='melody' heroName='choclate'/>
      <Hello/>  */}
    </div>
  );
}

export default App;
