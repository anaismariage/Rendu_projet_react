import React, { Component } from 'react';
import logo from './logo.svg';
import logo_animalis from './logo_animalis.png';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";


import { add_product, 
		count_increment, 
		count_decrement, 
		delete_product,
		add_product_panier,
		quantity_increment,
		quantity_decrement,
		valid_button_add_panier,
		invalid_button_add_panier,
		verif_delete_product_panier,
		final_price
		} from "./services/products/actions";

class App extends Component {

	state = {
		name:"",
		price:"",
		description:"",
		magasin_valid: false
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo_animalis} className="App-logo" />
					<div>
						{
							this.state.magasin_valid ? <h1 className="Titre">{this.state.shop_name}</h1> : null
						}						
						<input
							placeholder={"Nom du magasin"}
							type='shop_name'
							value={this.state.shop_name}
							onChange={(e) => this.setState({ shop_name: e.target.value })}
						/>
					</div>
					<div>
						<button onClick={() => {
							this.setState({magasin_valid: true})
						}}
						>
							Valider
						</button>
					</div>
				</header>
				<div className="Container">

					<div className="Module">
						<h2>Store</h2>
						<ul>
							{
								this.props.products.items.map((item, i) => {
									if(item.panier_bool==false && item.compteur > 0){
										return (
											<ul className="AfficheInfos"
												key={item.id}
											>
												{item.name}
												<br/>
												{item.price}€
												<br/>
												{item.description}
												<br/>
												{item.compteur}
												<br/>
												<div style={{height: 200, width: "100%"}}>
													<img src={item.url} style={{height:"100%", width:"auto"}}/>
												</div>
												<div>
													<button onClick={() => {
														this.props.add_product_panier({
															id: item.id,
															name: item.name,
															price: item.price
														});
														this.props.quantity_increment(i);
														this.props.count_decrement(i);
														this.props.valid_button_add_panier(i)}
														}
													>
														Ajouter au panier
													</button>
												</div>
											</ul>
										)}

									else{
										return (
											<ul
												key={item.id}
											>
												{item.name}
												<br/>
												{item.price}€
												<br/>
												{item.description}
												<br/>
												{item.compteur}
												<br/>
												<div style={{height: 200, width: "100%"}}>
													<img src={item.url} style={{height:"100%", width:"auto" }}/>
												</div>
											</ul>
										)}
								})
							}
						</ul>
						
					</div>

					<div className="Module">
						<h2>Panier</h2>
						<ul>
							{
								this.props.products.panier.map((panier,i) => {
									return (
										<li
											key={panier.id}
										>
											{panier.name}
											<br/>
											{panier.price}€
											<br/>
											{panier.quantity}
											<br/>
											<span>
												<button onClick={() => {
													this.props.quantity_increment(i);
													this.props.count_decrement(i);
													this.setState();
													console.log(panier)}

												}
												>
													+1
												</button>
											</span>
											<span>
												<button onClick={() => {
													this.props.quantity_decrement(i);
													this.props.count_increment(i);
													this.props.verif_delete_product_panier(i);
													this.props.invalid_button_add_panier(i);
													this.setState()}
												}
												>
													-1
												</button>
											</span>
										</li>
									)
								})
							}
						</ul>
						<div>
							<button onClick={() => {
								this.props.verif_delete_product_panier();
								this.props.invalid_button_add_panier();
								this.setState()}
							}
							>
								Valider commande
							</button>
						</div>
						<div>
							Total : {this.props.final_price} €
						</div>
					</div>

					<div className="Module">
						<div>
							<h2>Inventaire</h2>
							<div className="Margin">
								<div>
									<input
										placeholder={"Nom de l'élément"}
										type='name'
										value={this.state.name}
										onChange={(e) => this.setState({ name: e.target.value })}
									/>
								</div>
								<div>
									<input
										placeholder={"Prix"}
										type='price'
										value={this.state.price}
										onChange={(e) => this.setState({ price: e.target.value })}
									/>
								</div>
								<div>
									<input
										placeholder={"Description"}
										type='description'
										value={this.state.description}
										onChange={(e) => this.setState({ description: e.target.value })}
									/>
								</div>
								<div>
									<input
										placeholder={"URL de l'image"}
										type='url'
										value={this.state.url}
										onChange={(e) => this.setState({ url: e.target.value })}
									/>
								</div>
							</div>
							<button
								onClick={() => {
									console.log(isNaN(parseFloat(this.state.price)));

									if(isNaN(parseFloat(this.state.price))){
										alert("Le prix n'est pas valide !")
									}
									else{
										this.props.add_product({
											name: this.state.name, 
											price: this.state.price,
											description: this.state.description,
											url: this.state.url,
											panier_bool: false,
										});
										this.setState({
											name:"",
											price:"",
											description:""});
									}
								}}

							>
								Ajouter
							</button>
							
						</div>

						<div>
							<ul>
							{
								this.props.products.items.map((item, i) => {
									return (
										<ul
											key={item.id}
										>
											{item.name}
											<br/>
											{item.price}€
											<br/>
											{item.description}
											<br/>
											{item.compteur}
											<br/>
											<div style={{height: 200, width: "100%"}}>
												<img src={item.url} style={{height:"100%", width:"auto" }}/>
											</div>
											<button onClick={() => {
												this.props.count_increment(i);
												this.setState()}}
											>
												Incrémenter
											</button>
											<button onClick={() => {
												this.props.count_decrement(i);
												this.setState()}}
											>
												Decrémenter
											</button>
											<button onClick={() => {
												this.props.delete_product(i);
												this.setState()}}
											>
												Supprimer
											</button>

										</ul>
									)
								})
							}
							</ul>
						</div>
					</div>
				</div>
			</div>
		
		);
	}
}


const mapStateToProps = (state) => ({
	products: state.products,
});

const mapActionsToProps = (dispatch) => ({
	add_product: bindActionCreators(add_product, dispatch),
	count_increment: bindActionCreators(count_increment, dispatch),
	count_decrement: bindActionCreators(count_decrement, dispatch),
	delete_product: bindActionCreators(delete_product, dispatch),
	add_product_panier: bindActionCreators(add_product_panier, dispatch),
	quantity_increment: bindActionCreators(quantity_increment, dispatch),
	quantity_decrement: bindActionCreators(quantity_decrement, dispatch),
	valid_button_add_panier: bindActionCreators(valid_button_add_panier, dispatch),
	invalid_button_add_panier: bindActionCreators(invalid_button_add_panier, dispatch),
	verif_delete_product_panier: bindActionCreators(verif_delete_product_panier, dispatch),
	final_price: bindActionCreators(final_price, dispatch),

});

export default connect(mapStateToProps, mapActionsToProps)( App );