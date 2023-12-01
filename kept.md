"use client"
import "grapesjs/dist/css/grapes.min.css"
import "grapesjs/dist/grapes.min.js"
import 'grapesjs-preset-webpage'; // Importing the 'grapesjs-preset-webpage' plugin
import { GrapesjsReact } from 'grapesjs-react'; // Importing GrapesjsReact component from 'grapesjs-react'

const Primary = () => {
  return <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      'gjs-preset-webpage',
      'gjs-blocks-basic'
    ]}
  />;
};

// Defining a functional component named Editor
export default function Editor() {
  return (
    <>
      <Primary /> {/* Rendering the Primary component */}
    </>
  );
}
