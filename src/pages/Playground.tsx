import { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import './playground.css';

const Playground = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      if (!code.trim()) {
        // Se não houver código, limpe a saída
        setOutput('');
        return;
      }

      // Executando o código usando eval
      const result = eval(code);
      setOutput(result);
    } catch (error: any) {
      console.error('Erro ao executar o código:', error);
      setOutput(`Erro: ${error.message}`);
    }
  };

  return (
    <div className="playground-container">
      <div className="editor-container">
        <AceEditor
          mode="javascript"
          theme="monokai"
          value={code}
          onChange={setCode}
          name="editor"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      <div className="output-container">
        <div className="button-container">
          <button onClick={runCode}>Executar</button>
        </div>
        <div>
          <strong>Saída:</strong>
          <pre>{JSON.stringify(output)}</pre>
        </div>
      </div>
    </div>
  );
};


export default Playground;
