import React from 'react'
import { Link } from 'react-router-dom'
function MainFooter() {

  const footerlink = [

  { "id":1,
    "name":"회사소개",
    "url":'https://company.ssg.com'
  },
  { "id":2,
    "name":"이용약관",
    "url":'https://m.ssg.com/comm/commInfo.ssg?type=clause&amp;_mpop=new'
  },
  { "id":3,
    "name":"전자금융거래이용약관",
    "url":'https://member.ssg.com/m/policies/tradeTerms.ssg'
  },
  { "id":4,
    "name":"개인정보처리방침",
    "url":'https://member.ssg.com/m/policies/privacy.ssg'
  },
  { "id":5,
    "name":"청소년보호방침",
    "url":'https://member.ssg.com/m/policies/youthProtection.ssg'
  },
  { "id":6,
    "name":"소비자분쟁해결기준",
    "url":'https://member.ssg.com/m/policies/consumerDispute.ssg'
  },
  { "id":7,
    "name":"입점상담",
    "url":'https://partners.ssgadm.com/m/'
  },
  { "id":1,
    "name":"회사소개",
    "url":'https://company.ssg.com'
  },



  ]



  return (
    <>
    <div className="mcom_mall_wrap v2">
					<div className="mcom_mall_box">
					<span className="mcom_mall_name">(주)에스에스지닷컴</span>
						<address>대표자: 강희석<span className="bar">|</span>사업자등록번호: 870-88-01143<br/>통신판매업 신고번호: 제2022-서울강남-03751호
            <Link to='https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8708801143'>사업자 정보확인</Link><br/>개인정보보호 책임자: 김우진<span className="bar">|</span>주소: 서울특별시 강남구 테헤란로 231<br/>호스팅서비스 사업자 : (주)에스에스지닷컴</address>
					</div>
					<div className="mcom_noti_wrap">
						<p className="mcom_noti_tip">우리은행 채무지급보증 안내 <Link to='https://m.ssg.com/comm/popupWooriService.ssg'>서비스가입사실 확인</Link></p>
						<p className="mcom_noti_txt">당사는 고객님이 현금 결제한 금액에 대해 우리은행과<br/>채무지급 보증 계약을 체결하여 안전거래를 보장하고 있습니다.</p>
					</div>
					<div className="mcom_cont_info">
						<h3 className="blind">SSG.COM 정책 및 약관</h3>
						<ul className="mcom_cont_lst">

              {footerlink ? footerlink.map(link => 
                (
                    <li key={link.id}>
                      <Link to={link.url}>{link.name}</Link>
                    </li>

                )) : ""}
						</ul>
					</div>
					<div className="mcom_noti_wrap ty2">
						<p className="mcom_noti_txt">㈜에스에스지닷컴 사이트의 상품/판매자/쇼핑정보, 컨텐츠, UI 등에 대한 무단 복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠사업 진흥법 등에 의하여 엄격히 금지됩니다.</p>
					</div>
					<p className="mcom_copyright">Copyright ⓒ SSG.COM Corp. All rights reserved.</p>
				</div>
    </>
  )
}

export default MainFooter