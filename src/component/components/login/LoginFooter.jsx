import React from 'react'
import { Link } from 'react-router-dom'

// 로그인 Footer 영역 컴포넌트

function MainFooter() {
  return (
    <>
    <div className="footerContents">
					<div className="">
					<p className="footerBold">(주)에스에스지닷컴</p>
            <p className="footerLight">
              <address>대표자: 강희석<span className="bar">|</span>사업자등록번호: 870-88-01143<br/>통신판매업 신고번호: 제2022-서울강남-03751호
              <Link to='https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8708801143'>사업자 정보확인</Link><br/>개인정보보호 책임자: 김우진<span className="bar">|</span>주소: 서울특별시 강남구 테헤란로 231<br/>호스팅서비스 사업자 : (주)에스에스지닷컴</address>
            </p>
					</div>
					<div className="">
						<p className="footerBold">우리은행 채무지급보증 안내 <Link to='https://m.ssg.com/comm/popupWooriService.ssg'>서비스가입사실 확인</Link></p>
						<p className="footerLight">당사는 고객님이 현금 결제한 금액에 대해 우리은행과<br/>채무지급 보증 계약을 체결하여 안전거래를 보장하고 있습니다.</p>
					</div>
				</div>
    </>
  )
}

export default MainFooter