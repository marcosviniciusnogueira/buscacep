import './App.css';
import { useForm } from 'react-hook-form';

function App() {

  const {register, handleSubmit, setValue} = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  const checaCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      setValue('rua', data.logradouro);
      setValue('bairro', data.bairro);
      setValue('cidade', data.localidade);
      setValue('estado', data.uf);
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Busca Cep:</h1>
      <label>
        CEP:
        <input type="text" {...register("cep")} onBlur={checaCEP}/>
      </label>
      <label>
        Rua:
        <input type="text" {...register("rua")}/>
      </label>
      <label>
        Bairro:
        <input type="text" {...register("bairro")}/>
      </label>
      <label>
        Cidade:
        <input type="text" {...register("cidade")}/>
      </label>
      <label>
        Estado:
        <input type="text" {...register("estado")}/>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
