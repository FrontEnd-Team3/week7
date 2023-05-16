import styled from "styled-components";

function ProductCard({ onNavigate, product }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat().format(price);
    /*
      Intl.NumberFormat()은 JavaScript에서 제공하는 내장 객체로, 숫자를 형식화하는 데 사용됩니다. 이 객체의 format() 메서드를 호출하여 숫자를 형식화하고, 그 결과로 형식화된 숫자를 포함하는 문자열을 반환합니다.
      new Intl.NumberFormat([locales [, options]]).format(number)
    */
  };
  return (
    <>
      {product.map((a, i) => {
        return (
          <S.Item key={i} onClick={onNavigate}>
            <h4>{a.productName}</h4>
            <p>상품번호: {a.productNumber}</p>
            <p>가격: {formatPrice(a.productPrice)}원</p>
            <p>사이즈: {a.productSize}</p>
            <p>평점: {a.productRating}</p>
            <p>리뷰: {a.productReview}</p>
          </S.Item>
        );
      })}
    </>
  );
}
export default ProductCard;

const Item = styled.li`
  border: 1px solid #000;
  cursor: pointer;
  width: 300px;
  margin: 16px auto;
`;

const S = {
  Item,
};
