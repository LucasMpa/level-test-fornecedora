import { useState } from "react";
import { maskNumber, measurementMask } from "./utils/masks";

export default function IndexPage() {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [mark, setMark] = useState("");
  const [year, setYear] = useState("");
  const [equipDesc, setEquipDesc] = useState("");
  const [iftingPoint, setIftingPoint] = useState(false);
  const [perforator, setPerforator] = useState(false);
  const [spray, setSpray] = useState(false);
  const [hydraulicBreaker, setHydraulicBreaker] = useState(false);
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [width, setWidth] = useState("");
  const [heigth, setHeigth] = useState("");
  const [length, setLength] = useState("");

  const showFields = () => {
    return {
      name,
      model,
      mark,
      year,
      equipDesc,
      iftingPoint,
      perforator,
      spray,
      hydraulicBreaker,
      price,
      weight,
      width,
      heigth,
      length,
    };
  };

  const mockedDataMark = [
    "Case Construction",
    "DAF",
    "Dynapac",
    "Epiroc",
    "Manitou",
    "New Holland",
    "Pramac",
    "Yale",
  ];

  const mockedDataModel = [
    "Caminhões",
    "Escavadeira",
    "Retroescavadeiras",
    "Carregadeira",
    "Trator de Esteira",
  ];

  const showPreview = (event) => {
    if (event.target.files.length > 0) {
      const src = URL.createObjectURL(event.target.files[0]);
      const imgPreview = document.getElementById("img-preview2");

      imgPreview.src = src;
      imgPreview.style.display = "block";
    }
  };

  return (
    <div className="p-16">
      <h1 className="text-2xl font-bold text-center">
        Cadastro de máquina pesadas
      </h1>
      <div className="mt-8 max-w-md mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">Nome</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Modelo</span>
            <select
              className="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <option selected hidden>
                Selecione um modelo aqui
              </option>
              {mockedDataModel.map((data, index) => {
                return <option key={index}>{data}</option>;
              })}
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Marca</span>
            <select
              className="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full"
              value={mark}
              onChange={(e) => setMark(e.target.value)}
            >
              <option selected hidden>
                Selecione uma marca aqui
              </option>
              {mockedDataMark.map((data, index) => {
                return <option key={index}>{data}</option>;
              })}
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">Ano</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="John Doe"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </label>

          <div className="block">
            <span className="text-gray-700">Opções</span>
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={(e) => setIftingPoint(e.target.checked)}
                  />
                  <span className="ml-2">Ponto de içamento</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={(e) => setPerforator(e.target.checked)}
                  />
                  <span className="ml-2">Perfuradora</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={(e) => setSpray(e.target.checked)}
                  />
                  <span className="ml-2">Pulverizador</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={(e) => setHydraulicBreaker(e.target.checked)}
                  />
                  <span className="ml-2">Rompedor Hidráulico</span>
                </label>
              </div>
            </div>
          </div>

          <label className="block">
            <span className="text-gray-700">Descrição do equipamento</span>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows={3}
              defaultValue={""}
              value={equipDesc}
              onChange={(e) => setEquipDesc(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Peso</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="John Doe"
              value={weight}
              onChange={(e) => setWeight(measurementMask(e))}
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Comprimento</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="John Doe"
              value={length}
              onChange={(e) => setLength(measurementMask(e))}
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Largura</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="John Doe"
              value={width}
              onChange={(e) => setWidth(measurementMask(e))}
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Altura</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="John Doe"
              value={heigth}
              onChange={(e) => setHeigth(measurementMask(e))}
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Preço da máquina</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="John Doe"
              value={price}
              maxLength="11"
              onChange={(e) => setPrice(maskNumber(e))}
            />
          </label>

          <input
            type="file"
            id="img-preview"
            accept="image/*"
            onChange={(event) => {
              showPreview(event);
            }}
          />

          <img id="img-preview2" className="max-w-full" />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
            onClick={() => {
              console.log(showFields());
            }}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
