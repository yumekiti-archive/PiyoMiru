import { FC } from 'react';

interface Props {
  error : string
  errorsDetails : Array<any>
}

const Error: FC<Props> = ({ error, errorsDetails }) => {
  return (
    <>
      { errorsDetails.length > 0 ? (
        errorsDetails.map((err: any, index: number) => (
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