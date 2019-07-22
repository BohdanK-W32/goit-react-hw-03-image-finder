import React, { Component } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import Gallery from './components/Gallery/Gallery';
import Modal from './components/Modal/Modal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { fetchAPIdata } from './services/fetchAPI';

const API_KEY = '13089896-ed765526c820829856852c492';

const INITIAL_STATE = {
  isModalOpen: false,
  queryString: '',
  page: 1,
  pictures: [],
  largeImageURL: '',
};

export default class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const { page, queryString } = this.state;

    fetchAPIdata({
      API_KEY,
      queryString,
      page,
      photosPerPage: 12,
    }).then(data => this.setState({ pictures: data }));

    document.addEventListener('keydown', this.handleKeyPressCloseModal);
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, queryString, pictures } = this.state;

    if (prevState.queryString === queryString && prevState.page !== page) {
      fetchAPIdata({
        API_KEY,
        queryString,
        page,
        photosPerPage: 12,
      }).then(data =>
        this.setState({ pictures: [...pictures, ...data] }, () => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
        }),
      );
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
  };

  handleQueryStringChange = e => {
    const { page } = this.state;
    const { value } = e.target;

    this.setState({ queryString: value, page: 1 }, () => {
      const { queryString } = this.state;
      fetchAPIdata({
        API_KEY,
        queryString,
        page,
        photosPerPage: 12,
      }).then(data => this.setState({ pictures: data }));
    });
  };

  handleClickLoadMore = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  handleClickOpenModal = e => {
    this.setState({
      isModalOpen: true,
      largeImageURL: e.currentTarget.parentNode.firstElementChild
        .getAttribute('largeImageURL')
        .toString(),
    });
  };

  handleClickCloseModal = e => {
    const { nodeName } = e.target;

    if (nodeName === 'DIV') {
      this.setState({ isModalOpen: false });
    }
  };

  handleKeyPressCloseModal = e => {
    if (e.keyCode === 27 || e.key === 'Escape' || e.code === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { isModalOpen, queryString, pictures, largeImageURL } = this.state;

    return (
      <>
        {isModalOpen && (
          <Modal imgSrc={largeImageURL} onClick={this.handleClickCloseModal} />
        )}
        <header>
          <SearchForm
            value={queryString}
            onChange={this.handleQueryStringChange}
            onSubmit={this.handleSubmit}
          />
        </header>
        <main>
          <Gallery images={pictures} onClick={this.handleClickOpenModal} />
          <LoadMoreBtn onClick={this.handleClickLoadMore} />
        </main>
      </>
    );
  }
}
