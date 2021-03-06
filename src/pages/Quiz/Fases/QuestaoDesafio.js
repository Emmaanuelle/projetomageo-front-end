import React from "react";
import CustomizedDialogs from "../Dica";
import LinearWithValueLabel from "../Progresso";

const QuestaoDesafio = ({ mostrarResposta, irParaProximaQuestao, handleAnswer, indexAtual, desafio, data: { pergunta, resposta, answers, video, dica, nivel, fase } }) => {



    return (
        
        <div className="container">
            {video !== null ?
                <div className="bg-white text-purple-800 p-10 rounded-lg shadow">
                    <h3 className="text-2xl"
                        dangerouslySetInnerHTML={{ __html: video }} />
                </div> :
                <></>
            }
            <div className="grid grid-cols-3 gap-4">
                <CustomizedDialogs dica={dica} />
                <p className="text-center" >Nível: {nivel === 'facil' ? <span className='text-green-700'>FÁCIL</span> : nivel === 'medio' ? <span className='text-yellow-500'>MÉDIO</span> : nivel === 'dificil' ? <span className='text-blue-500'>DIFÍCIL</span> : <span style={{ fontWeight: 'bold', color: '#FF0E0E' }}>DESAFIO</span>}</p>
                <p className="text-center" >Fase: {fase === 'quadrado' ? <span className='text-blue-300'>QUADRADO</span> : fase === 'retangulo' ? <span style={{ color: '#FFBB0E' }} >RETÂNGULO</span> : fase === 'triangulo' ? <span style={{ color: '#9D9D9D' }}>TRIÂNGULO</span> : fase === 'circulo' ? <span>CÍRCULO</span> : fase}</p>
            </div>
            <LinearWithValueLabel indexAtual={indexAtual} question={desafio} />
            <div className="bg-gray-100 text-purple-800 p-10 rounded-lg shadow">
                <h3 className="text-2xl"
                    dangerouslySetInnerHTML={{ __html: pergunta }} />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
                {answers.map((resposta_certa, id) => {
                    const bgColor = mostrarResposta ?
                        resposta_certa === resposta ? 'bg-green-500' : 'bg-red-500' : 'bg-gray-100';
                    const textColor = mostrarResposta ? 'text-white' : 'text-purple-700';

                    return (
                        <button key={id} className={`${bgColor} rounded p-4
                shadow ${textColor} font-semibold`}
                            onClick={() => handleAnswer(resposta_certa)} dangerouslySetInnerHTML={{ __html: resposta_certa }} />
                    )
                })}
            </div>
            {mostrarResposta && (
                <button className="ml-auto bg-purple-700 
                    text-white p-4 font-semibold rounded shadow mt-6"
                    onClick={irParaProximaQuestao}>Próxima Questão</button>
            )}
        </div>
    )
}
export default QuestaoDesafio;