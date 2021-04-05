import React, { Component } from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

export default class Content extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid m-2">
                    <div className="row">
                        <div className="col">
                            <Jumbotron fluid>
                                <Container>
                                    <h1>Ramadhan Sebentar lagi Kawan</h1>
                                    <p>Selamat menunaikan Ibadah Puasa</p>
                                </Container>
                            </Jumbotron>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 p-2">
                            <figure className="figure">
                                <img src="https://cdn-2.tstatic.net/tribunnews/foto/bank/images2/jadwal-imsakiyah-ramadhan-2021-untuk-seluruh-indonesia-mulai-selasa-13-april-20211-ramadhan-1442.jpg" class="figure-img img-fluid rounded" alt="..." />
                                <figcaption class="figure-caption">Ramadhan tiba</figcaption>
                            </figure>
                        </div>
                        <div className="col-md-8 bg-light p-2 pr-5">
                            <h3 className='featurette-heading text-left'>Pesan untuk Kalian</h3>
                            <p className='text-justify'>jangan sampai bolong kawan puasanya</p>
                            <p className='text-justify'>semoga kita selalu dalam lindungan allah swt</p>
                            <p className='text-justify'>semangat semua</p>
                            <p className="text-justify">Islam itu indah islam bukan teroris</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}