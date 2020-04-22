import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS
		};
	}

	onDishSelect(dishId) {
		this.setState({ selectedDish: dishId });
	}

	render() {
		const HomePage = () => {
			return (
				<Home
					dish={this.state.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
					leader={this.state.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		};
		const DishWithId = ({ match }) => {
			return (
				<DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
					comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
			);
		};
		const AboutUs = () => {
			return (
				<About leaders={this.state.leaders} />
			);
		}
		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
					<Route path='/menu/:dishId' component={DishWithId} />
					<Route exact path='/contactus' component={Contact} />
					<Route exact path='/about' component={AboutUs} />} />
					<Redirect to="/home" />
				</Switch>
				{/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
				{/* <DishDetail detail={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
				<Footer />
			</div>
		);
	}
}

export default Main;