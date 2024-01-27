import { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import './playground.css';

// ...

const Playground = () => {
  const [code, setCode] = useState('');
  const [outputs, setOutputs] = useState<{ code: string; output: string }[]>([]);

  const runCode = () => {
    try {
      if (!code.trim()) {
        // Se não houver código, limpe a saída
        setOutputs([]);
        return;
      }

      // Executando o código usando eval
      const result = eval(code);
      // Formatando a saída como JSON
      const formattedResult = JSON.stringify(result, null, 2);

      // Adicionando a saída ao array de histórico
      setOutputs((prevOutputs) => [
        ...prevOutputs,
        { code, output: formattedResult }
      ]);
    } catch (error: any) {
      console.error('Erro ao executar o código:', error);
      setOutputs((prevOutputs) => [
        ...prevOutputs,
        { code, output: `Erro: ${error.message}` }
      ]);
    }
  };

  const clearOutputs = () => {
    // Limpar o histórico de saída
    setOutputs([]);
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
          style={{ width: '100%' }}
        />
      </div>
      <div className="output-container">
        <div className="button-container">
          <button onClick={clearOutputs}>Limpar Saída</button>
          {/* Adicionando um espaço entre os botões */}
          <span style={{ marginRight: '10px' }}></span>
          <button onClick={runCode}>Executar</button>
        </div>
        {outputs.map((output, index) => (
          <div key={index}>
            <strong>Saída {index + 1}:</strong>
            <pre>{output.output}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

// ...






export default Playground;
