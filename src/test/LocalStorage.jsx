import React from 'react'
import { useRecoilState } from 'recoil'
import RecentItemState from '../recoil/atoms/RecentItemState'

function LocalStorage() {

  const [item, setItem] = useRecoilState(RecentItemState);

  console.log(item)

  return (
    <>
      <div>로컬에 아이템 저장</div>

      <div>
        <div>1번 아이템</div>
        <div>2번 아이템</div>
        <div>3번 아이템</div>
      </div>

    </>
  )
}

export default LocalStorage