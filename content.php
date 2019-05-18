<div class="col-md-6 animate-box">
<?php 
                    session_start();
                    if($_SESSION["currentPage"]=="Check" )
                    {
						
						echo'
						<h3>Увійдіть або зареєструйтеся</h3>';
                    }
                    elseif($_SESSION["currentPage"]=="Authorise")
                    {
						echo'
						<h3>Увійдіть в систему</h3>';
                    
					}
					
					?>
					<form action="Library.php" method="post">
					<?php 
				
						if($_SESSION["currentPage"]=="Check" || $_SESSION["currentPage"]=="Authorise")
						{ echo'
							
						<div class="row form-group">
							<div>
								<!-- <label for="fname">First Name</label> -->
								<input type="text" id="fname" class="form-control" name="PIB" placeholder="ПІБ">
							</div>
							
						</div>';

						
							$ButtonValue=($_SESSION["currentPage"]=="Check")?"AuthoriseBtn": "onAuthorise";
						if($_SESSION["currentPage"]=="Check")
						echo'
						
						<div>
							<div>
								<!-- <label for="fname">First Name</label> -->
								<input type="text" id="fname" class="form-control" name="Adress" placeholder="Адреса">
							</div>
					
						</div>
						<div class="row form-group">
						<div class="col-md-6">
								<!-- <label for="lname">Last Name</label> -->
								<input type="number" id="lname" class="form-control" name="Telephone_number" placeholder="Номер телефону">
							</div>
							
							<div class="col-md-6">
								<!-- <label for="email">Email</label> -->
								<input type="text" id="email" class="form-control" name="Faculty" placeholder="Факультет">
							</div>
							
						</div>';
						
						echo'
						<div class="row form-group">
							<div class="col-md-12">
								<!-- <label for="fname">First Name</label> -->
								<input type="password" id="Password" class="form-control" name="Parol" placeholder="Пароль">
							</div>
					
						</div>

						<div class="row form-group">';
						 if($_SESSION["currentPage"]=="Check") echo'
						 
						<div class="col-md-6">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="Check" value="Зареєструватися">
							</div>';
							echo '
							<div class="col-md-6">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="AuthoriseBtn" value="Увійти">
							</div>';
						}
						else if($_SESSION["currentPage"]=="BOOK")
						{
							echo '
							<div class="col-md-3">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="BOOKBtn" value="Усі книги">
							</div>
							<div class="col-md-3">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="RentBtn" value="Оренда книги">
							</div>
							
							<div class="col-md-3">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="SerchBtn" value="Пошук книги">
							</div>
							<div class="col-md-3">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="SpisokBtn" value="Звіт">
							</div>
							<br>
							
							<div class="slide">
								<input type="radio" name="slider2" id="slider2_1" checked="checked">
								<label for="slider2_1"></label>
								<div>
									 <img src="Mayers.jpg">
									 <figcaption>Деревянная скульптура</figcaption>
								</div>
								<label for="slider2_2"></label>
								<input type="radio" name="slider2" id="slider2_2">
								<label for="slider2_2"></label>
								<div>
									 <img src="Mayers.jpg">
									 <figcaption>asasas</figcaption>
								</div>
								<label for="slider2_3"></label>
								<input type="radio" name="slider2" id="slider2_3">
								<label for="slider2_3"></label>
								<div>
									 <img src="Mayers.jpg">
									 <figcaption>dfdf</figcaption>
								</div>
								<label for="slider2_4"></label>
								
							</div>													
							<br>
							<h3><br>Усі книги бібліотеки</h3>';
							
							if(count($_SESSION["Books"])>0)
							foreach($_SESSION["Books"] as $book){
								echo '<h3> Номер книги: '.$book[0].'<br> Назва книги: '.$book[1].'<br> Жанр: '.$book[2].'<br> Автор: ' .$book[3].'<br></h3>';
							}
							
						}else if($_SESSION["currentPage"]=="Rent")
						{
							echo '
							<div class="col-md-3">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="BOOKBtnR" value="Усі книги">
							</div>
							<div class="col-md-3">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="RentBtnR" value="Оренда книги">
							</div>
							<div class="col-md-3">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="SerchBtnR" value="Пошук книги"><br>
							</div>
							<div class="col-md-3">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="SpisokBtn" value="Звіт">
								<br> 
							</div>
							
					
							<h3>Оренда книг</h3>
							
							
							<div class="col-md-12">
								<!-- <label for="fname">First Name</label> -->
								<input type="number" id="fname" class="form-control" name="Code_Book" placeholder="Номер книги"><br>
							</div>
							<div class="col-md-12">
								<!-- <label for="fname">First Name</label> -->
								<input type="text" id="fname" class="form-control" name="Name_Book" placeholder="Назва книги"><br>
							</div>
							
							<div class="col-md-4">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="Rent" value="Орендувати">
							</div><br>
						</div>';
							
						}else if($_SESSION["currentPage"]=="Serch")
						{
							echo '
							<div class="col-md-4">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="BOOKBtnS" value="Усі книги">
							</div>
							<div class="col-md-4">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="RentBtnS" value="Оренда книги">
							</div>
							<div class="col-md-4">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="SerchBtnS" value="Пошук книги"><br>
							</div><br>
							<h3><br>Пошук книг по назві книги<br></h3>
							
							<div class="row form-group">
							<div class="col-md-12">
								<!-- <label for="fname">First Name</label> -->
								<input type="text" id="fname" class="form-control" name="SerchText" placeholder="Назва книги"><br>
							</div>
							<div class="col-md-4">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="Serch" value="Пошук">
							</div><br>
						</div>';
						if(count($_SESSION["SerchResult"])>0)
							foreach($_SESSION["SerchResult"] as $Book)
							{
							
								echo '<h3>Номер книги: '.$Book[0].'<br> Назва книги: '.$Book[1].'<br> Жанр: '.$Book[2].'<br>Автор: '.$Book[3].'<br></h3>';
								
							}
						}else if($_SESSION["currentPage"]=="Spisok")
						{
							echo '
							<div class="col-md-3">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="BOOKBtnR" value="Усі книги">
							</div>
							<div class="col-md-3">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="RentBtnR" value="Оренда книги">
							</div>
							<div class="col-md-3">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="SerchBtnR" value="Пошук книги"><br>
							</div>
							<div class="col-md-3">
								<!-- <label for="email">Email</label> -->
								<input type="submit" id="email" class="form-control" style="background: #f95959; color: #fff;" name ="SpisokN" value="Номеру читача"><br>
							</div>
								
							<h3><br>Звіт видачі книг<br></h3>';
							if(count($_SESSION["SpisokResult"])>0)
							foreach($_SESSION["SpisokResult"] as $spisok)
							{
							
								echo '<h3>Код видачі: '.$spisok[0].'<br> Номер читача: '.$spisok[1].'<br> Код книги: '.$spisok[2].'<br>Назва книги: '.$spisok[3].'<br>Дата видачі: '.$spisok[4].'<br>Дата повернення: '.$spisok[5].'<br></h3>';
								
							}
						}
							?>
						</div>
						
					</form>		
				</div>