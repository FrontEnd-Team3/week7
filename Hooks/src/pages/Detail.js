import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productList from "../__mock__/products.json";
import Table from "react-bootstrap/Table";

function DetailPage() {
  const params = useParams();
  console.log(params.productNumber);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProduct(productList.products);
  }, [params.productNumber]);

  const productFind = () => {
    const findProduct = product.find(
      (p) => p.productNumber === params.productNumber
    );

    if (findProduct) {
      return (
        <div>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>상품명</th>
                <td>{findProduct.productName}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>가격</th>
                <td>{findProduct.productPrice}원</td>
              </tr>
              <tr>
                <th>상품번호</th>
                <td>{findProduct.productNumber}</td>
              </tr>
              <tr>
                <th>상품사이즈</th>
                <td>{findProduct.productSize}</td>
              </tr>
              <tr>
                <th>상품평점</th>
                <td>{findProduct.productRating}</td>
              </tr>
              <tr>
                <th>상품평 개수</th>
                <td>{findProduct.productReview}</td>
              </tr>
              <tr>
                <th colSpan={2}>리뷰</th>
              </tr>
              {findProduct.Review.map((a, i) => {
                return (
                  <>
                    <tr key={i}>
                      <th>작성자</th>
                      <td>{a.reviewer} </td>
                    </tr>
                    <tr>
                      <th>리뷰</th>
                      <td> {a.review}</td>
                    </tr>
                    <tr>
                      <th>평점</th>
                      <td> {a.rating}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>
      );
    } else {
      navigate("/state/");
    }
  };

  return (
    <div>
      {productFind()}
      {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
    */}
    </div>
  );
}

export default DetailPage;
