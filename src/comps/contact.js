import { Fragment } from 'react';
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import '../styles/style.scss'
import '../styles/style.css.map'




const ContactPage = () => {
    return <body>
		<div class="wrapper">
			<div class="inner">
      <form action="">
					<h3>მოგვწერეთ</h3>
					<p>დაგვისვით კითხვა ბარსელონას შესახებ</p>
					<label class="form-group">
						<input type="text" class="form-control"  required/>
						<span>შენი სახელი</span>
						<span class="border"></span>
					</label>
					<label class="form-group">
						<input type="text" class="form-control"  required/>
						<span for="">მეილი</span>
						<span class="border"></span>
					</label>
					<label class="form-group" >
						<textarea name="" id="" class="form-control" required></textarea>
						<span for="">შეტყობინება</span>
						<span class="border"></span>
					</label>
					<button>გაგზავნა 
						<i class="zmdi zmdi-arrow-right"></i>
					</button>
				</form>
			</div>
		</div>
		
	</body>
  }

export default ContactPage;