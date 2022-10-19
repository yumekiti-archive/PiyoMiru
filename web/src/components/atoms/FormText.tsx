import { FC } from 'react';

const FormText: FC = () => {
  return (
    <div className="relative">
      <input type="text" id="name" className="h-16 px-4 bg-[#FFFAE3] rounded-2xl text-2xl" /> 
      <label htmlFor="name" className="absolute top-2 left-4 text-xs text-[#666666]">ユーザーネーム</label>
    </div>
  );
}

export default FormText;