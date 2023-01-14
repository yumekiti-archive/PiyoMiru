import { FC } from 'react';

interface Props {
  error : string
  errorDetails : Array<any>
}

const Error: FC<Props> = ({ error, errorDetails }) => {
  return (
    <>
      { errorDetails.length > 0 ? (
        errorDetails.map((err: any, index: number) => (
          <p key={index} className='text-red-500 text-sm'>
            {err.message}
          </p>
        ))
      ) : (
        <p className='text-red-500 text-sm'>
          {error}
        </p>
      )}
    </>
  )
}

export default Error;