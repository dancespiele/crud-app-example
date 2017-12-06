import { m } from 'pyrite';
import { MainPageController } from './MainPageController';
import { Map } from '../../components';
import './MainPageStyles.scss';

export function MainPageTemplate(this: MainPageController){
    return (
        <div class="col-xs-12">
            <h1>POST LIST</h1>
            <div>{this.posts.length ? this.posts.map((post: any, index) => {
                return (
                    <div class="row">
                        <div class="col-xs-6">
                            {this.posts[index].post.showInput ? 
                                <div class='form form-inline'>
                                    <div class='form-group'>
                                        <label>{`${index + 1}. `}</label>
                                        <input 
                                            class='form-control'
                                            value={this.posts[index].post.title}
                                            oninput={(event: any) => this.posts[index].post.title = event.target.value}>
                                        </input>
                                    </div>
                                <button 
                                    class='btn btn-success' 
                                    onclick={() => this.posts[index].post.showInput = false}>
                                    <span class="glyphicon glyphicon-ok"></span>
                                </button>    
                                </div> :
                                <div class='post-title'>
                                    <h3>{`${index + 1}. ${post.post.title.toUpperCase()}`}</h3>
                                    <button
                                        class='btn btn-default' 
                                        onclick={() => this.posts[index].post.showInput = true}>
                                        <span class="glyphicon glyphicon-pencil"></span>
                                    </button>
                                    <button
                                        class='btn btn-danger' 
                                        onclick={() => this.posts.splice(index, 1)}>
                                        <span class="glyphicon glyphicon-remove"></span>
                                    </button>
                                </div>}
                            <p>{post.post.body}</p>
                            <small><mark>Username:</mark>{post.user.username}</small><br/>
                            <small><mark>Album:</mark>{post.album.title}</small><br/>
                            <small><mark>Author:</mark>{post.user.name}</small><br/>
                            <small><mark>Email:</mark>{post.user.email}</small><br/>
                            <small><mark>Phone:</mark>{post.user.phone}</small><br/>
                            <small><mark>Company:</mark></small><br/>
                            <div class="col-xs-12">
                                <small>{post.user.company.name}</small><br/>
                                <small>{post.user.company.catchPhrase}</small><br/>
                                <small>{post.user.company.bs}</small><br/>
                            </div>
                            <small><mark>Address:</mark></small><br/>
                            <address class="col-xs-12">
                                <small>{`${post.user.address.street} ${post.user.address.suite} `}</small>
                                <small>{`ZIP: ${post.user.address.zipcode} ${post.user.address.city}`}</small><br/>
                            </address>
                            <Map
                                lat={post.user.address.geo.lat}
                                lng={post.user.address.geo.lng}
                                id={`map-${index}`}
                            ></Map>
                        </div>
                    </div>
                );
            }) : ''} 
            </div>
        </div>
    );
}