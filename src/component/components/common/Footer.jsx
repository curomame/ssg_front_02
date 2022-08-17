import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {

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
  { "id":9,
    "name":"회사소개",
    "url":'https://company.ssg.com'
  },



  ]
 

  return (
    <>
      
      <div className='mainFooterCall'>
            <div className='mainFooterCallIcon'>
              
              <div>
                <span class="material-icons-outlined">phone</span>
              </div>
            
            <div className='mainFooterCallWords'>
              <div>SSG.COM 고객센터 / 전자금융거래 분쟁처리</div>
              <div>1577-3419 / ssg@ssg.com</div>
            </div>

          </div>
          
          <div className='mainFooterCallRight'>
            <div><p>전화걸기</p></div>
            <div><p>1:1 고객센터</p></div>
          </div>

        </div>

        <div className='mainFooterThreeBar'>
          <p><Link to='/'>로그아웃</Link></p>
          <p><Link to='/'>앱다운로드</Link></p>
          <p><Link to='/'>PC버전</Link></p>
        </div>

      <footer className='mainFooterContainer'>


        <div className='mainFooterInform'>
          <h5>(주)에스에스지닷컴</h5>
          
          <p>대표자: 강희석 사업자등록번호: 870-88-01143</p>
          <p>등신판매업 신고번호: 제20224서물 강남-03751 <span>사업자 정보확인</span></p>
          <p>개인정보브프 책임자. 김우진 주소: 서울특별시 강남구 테히란로 231 호스팅서비스 사업자 : (주)에스에스지닷컴</p>
        </div>
        
        <div>
          <h5>우리은행 채우지급보증 안내 <span>서비스가입사실 확인</span></h5>
          <p>당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급 보증 계약을 체결하여 안전거래를 보장하고 있습니다</p>
        </div>

        <div>
        <ul>
          <li>회사소개</li>
          <li>이용약관</li>
          <li>전자금용거래이용약관</li>
          <li>개인정보처리방침</li>
          <li>청소년보호방침</li>
          <li>소비자분쟁해결기준</li>
          <li>입점상담</li>
        </ul>
        </div>

        <div>
          <p>G에스에스지닷컴 사이트의 상품/판매자/쇼핑정보, 컨텐츠, u 등 에 대한 무단 복제. 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘 텐츠사업 진흥법 등에 의하여 업력히 금지됩니다</p>
        </div>

        <div>
          <p>Copyright © 55G.COM Corp. All rights reserved</p>
        </div>

      </footer>
    </>
  )
}

export default Footer