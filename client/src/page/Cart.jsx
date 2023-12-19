import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import img from '../img/man.png';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  @media only screen and (max-width: 630px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  border: ${(props) => props.type === 'filed' && 'none'};
  background-color: ${(props) =>
    props.type === 'filed' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filed' && 'white'};
  @media only screen and (max-width: 630px) {
    font-size: 10px;
    font-weight: 500;
  }
`;
const TopTexts = styled.div`
  @media only screen and (max-width: 630px) {
    display: none;
  }
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 630px) {
    flex-direction: column;
  }
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 630px) {
    flex-direction: column;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Detail = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span`
  @media only screen and (max-width: 630px) {
    display: none;
  }
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  @media only screen and (max-width: 630px) {
    margin: 5px 15px;
  }
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  @media only screen and (max-width: 630px) {
    margin-bottom: 20px;
  }
`;
const HR = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;
const SummaryText = styled.span``;
const SummaryPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
`;
function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>Your Bug</Title>
        <Top>
          <Link to="/">
            <TopButton>Continue Shopping</TopButton>
          </Link>
          <TopTexts>
            <TopText> Shopping Bag (2) </TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <Link to={'/pay'}>
            <TopButton type="filed">Check Out Now</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Detail>
                    <ProductName>
                      {' '}
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      {' '}
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Detail>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.quantity * product.price}{' '}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <HR />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryText>SubTotal</SummaryText>
              <SummaryPrice>$ {cart.total} </SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Estimated Shipping</SummaryText>
              <SummaryPrice>$5.90</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Shipping Discount</SummaryText>
              <SummaryPrice>$-5.9</SummaryPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryText>Total</SummaryText>
              <SummaryPrice>$ {cart.total}</SummaryPrice>
            </SummaryItem>
            <SummaryButton>
              <Link
                to={'/pay'}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                CHECK OUT NOW
              </Link>
            </SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
