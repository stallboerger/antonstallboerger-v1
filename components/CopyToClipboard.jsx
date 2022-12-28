import React from 'react';

function CopyToClipboardButton() {
  function handleClick() {
    // Create a temporary text field
    const tempTextField = document.createElement('textarea');

    // Set the value of the text field to the desired string
    tempTextField.value = 'test@stallboerger.de';

    // Append the text field to the body (necessary for the copy to work)
    document.body.appendChild(tempTextField);

    // Select the text field
    tempTextField.select();

    // Copy the text inside the text field
    document.execCommand('copy');

    // Remove the text field from the body
    document.body.removeChild(tempTextField);
  }

  return (
    <button onClick={handleClick} className="text-zinc-700 block px-4 py-2 text-sm hover:text-zinc-900 hover:bg-zinc-100">
      Copy to Clipboard
    </button>
  );
}

export default CopyToClipboardButton;
