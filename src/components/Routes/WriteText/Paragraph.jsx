/* eslint-disable react/prop-types */
export default function Paragraph({setTextContent, Limit}){
    return(
        <p
        contentEditable="true"
        onKeyDown={(e) => {
          let inputText = e.target.innerText;
          if (inputText.length >= Limit  && e.key !== 'Backspace') {
            e.preventDefault();
          }
        }}
        onInput={(e)=>{
          let inputText = e.target.innerText;
          setTextContent(inputText);
        }}
        onPaste={(e)=>{
          let pastedText = e.clipboardData.getData('text');
          let totalText = e.target.innerText + pastedText;
          if(totalText.length > Limit){
              e.preventDefault();
          }
        }}
        ref={Text}
        className="text-writable"
      ></p>
      )
}