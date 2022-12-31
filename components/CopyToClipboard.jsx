import React, {useState} from 'react';
import { Copy } from 'iconoir-react';

function CopyToClipboardButton() {

  const [text, setText] = useState('Copy to Clipboard');

  function handleClick() {
    // Create a temporary text field
    const tempTextField = document.createElement('textarea');

    // Set the value of the text field to the desired string
    tempTextField.value = 'anton@stallboerger.de';

    // Append the text field to the body (necessary for the copy to work)
    document.body.appendChild(tempTextField);

    // Select the text field
    tempTextField.select();

    // Copy the text inside the text field
    document.execCommand('copy');

    // Remove the text field from the body
    document.body.removeChild(tempTextField);

    setText('Copied!');

    // Change the text back to the original text after one second
    setTimeout(() => {
      setText('Copy to Clipboard');
    }, 1000);
  }

  return (
    <a onClick={handleClick} className="text-zinc-700 px-4 py-2 text-sm flex hover:bg-zinc-100 hover:text-zinc900 gap-2 cursor-pointer">
      <Copy />
      <p className='text-sm'>
        {text}
      </p>
    </a>
  );
}

export default CopyToClipboardButton;
