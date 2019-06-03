import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import DetailCard from '../../components/DetailCard';
import SimpleLoader from '../../components/SimpleLoader';
import { connect } from 'react-redux';
import { getProductById } from './actionCreators'
class DetailProduct extends Component {

  componentDidMount() {
    const { getProductById } = this.props;
    const { params } = this.props.match;
    getProductById(params.id)
  }

  render() {
    const { loading, product } = this.props;

    if (loading) {
      return <SimpleLoader />
    }

    return (
      <Container>
        <Grid centered columns={2}>
          <Grid.Column>
            {
              product && <DetailCard {...product} />
            }
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => (
  {
    product: state.detailReducer.product,
    loading: state.detailReducer.loading,
  }
)
export default connect(mapStateToProps, { getProductById })(DetailProduct);
