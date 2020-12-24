import { Fragment, useState, useCallback } from 'react';
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import '../styles/style.scss'
import '../styles/style.css.map'

const min = 6


function ContactPage () {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [subject, setSubject] = useState('')

	const validateSubmit = useCallback(
		(e) => {
		e.preventDefault()
		if(email.length < min || subject.length < min || name.length < min) {
			alert(`ტექსტის სიგრძე ნაკლებია ${min}-ზე`)
		} 
		else {
			alert('შეტყობინება გაგზავნილია')
		}
		},
		[email.length, name.length, subject.length],
	)



    return <body>
		<div class="wrapper">
			<div class="inner">
      <form action="" onSubmit={validateSubmit}>
					<h3>მოგვწერეთ</h3>
					<p>დაგვისვით კითხვა ბარსელონას შესახებ</p>
					<label class="form-group">
						<input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
						<span>შენი სახელი</span>
						<span class="border"></span>
					</label>
					<label class="form-group">
						<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control"/>
						<span for="">მეილი</span>
						<span class="border"></span>
					</label>
					<label class="form-group" >
						<textarea name="" id="" class="form-control" style={{ height: "200px" }} onChange={(e) => setSubject(e.target.value)}>{subject}</textarea>
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