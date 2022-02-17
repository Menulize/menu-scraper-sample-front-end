import React, { Component } from 'react'
import { Text } from "react-native"
class Uploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: null,
      isSelected: false,
      uploading: false,
      page_data: []
    }
  }

  valid_url(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  changeHandler = (event) => {
		this.setState({ 
      url: event.target.value,
      isSelected: true })
	};

	handleSubmission = () => {
    this.setState({ uploading: true })
    const url = 'https://menu-crawler.herokuapp.com/menu_for_url?' + new URLSearchParams({ url: this.state.url }) 
    
    fetch(
			url,
			{
				method: 'GET',
			}
		)
			.then((response) => response.json())
			.then((result) => {
        this.setState({ uploading: false, page_data: result['pages']})
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

  render() {
    const isSelected = this.state.isSelected
    const url = this.state.url
    const page_info = this.state.page_data.map((page, i) => {
      return (<tr>
        <td className="w-50">
          <Text>{page['text']}</Text>
        </td>
        <td className="" valign="top">
          <h2>Page { i + 1} of { this.state.page_data.length }</h2>
          <img className="w-100" src={
            "data:image/jpeg;base64, " + (page['image_raw'])} />
        </td>
      </tr>)
    })
    return (
    <div className="bg-light">
      <div className="p-3">
          <div className="card text-center">
            <div className="card-header">
              <h5>Locate a menu from a given restuarant's website</h5>
            </div>
            <div className="card-body">
              {!this.state.uploading && 
                <>
                  <input type="input" name="url" className="" onChange={this.changeHandler} />
                  {isSelected ? (
                    <div className="card offset-4 col-4 bg-light mt-2">
                      <p>URL: {url}</p>
                    </div>
                  ) : (
                    <p className="p-2">Select a URL to gather menu details from</p>
                  )}
                  
                  <div>
                    <button disabled={!this.valid_url(url)} className="btn btn-primary m-2" onClick={this.handleSubmission}>Submit for OCR</button>
                  </div>
                </>
              }
              { this.state.uploading && 
                <b>Crawling, scanning and analyzing...</b>
              }
            </div>  
          </div>
        <div>
          <table>
            {page_info}
          </table>
        </div>
      </div>
    </div>)
  }
}

export default Uploader;
