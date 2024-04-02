import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Comment } from 'src/app/types/comment';
import { Listing } from 'src/app/types/listing';
import { UserService } from 'src/app/user/user.service';
import { ListingModule } from '../listing.module';

@Component({
  selector: 'app-current-listing',
  templateUrl: './current-listing.component.html',
  styleUrls: ['./current-listing.component.css']
})
export class CurrentListingComponent implements OnInit {
  listing = {} as Listing;
  comments: any;
  deleteConfirmation = false;
  userId = localStorage.getItem('userId');
  isListingOwner = false;
  isCommentOwner = false;


  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  commentForm: FormGroup = this.fb.group({
    comment: ['', Validators.required],
  });
  comment: Comment = {
    _id: '',
    _ownerId: '',
    _createdOn: '',
    comment: '',
    listingId: '',
    author: {
      email: ''
    }
  };

  
  ngOnInit() {
    this.activeRoute.params.subscribe((data)=> {
      const id = data['listingId'];
      
      this.apiService.getListing(id).subscribe((listing)=> {
        this.listing = listing;
        this.isListingOwner = listing._ownerId == localStorage.getItem('userId')
        console.log(listing._ownerId)
        console.log(this.userId)
      })

      this.apiService.getAllComments(id).subscribe((comments)=> {
        this.comments = comments;
        this.buildForm(); 
      })
    })
  }

  buildForm() {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
    });
  }
  

  constructor(private userService: UserService, private fb:FormBuilder, private apiService: ApiService, private activeRoute: ActivatedRoute, private router: Router) {}

  showDeleteConfirmation() {
    this.deleteConfirmation = true;
  }

  hideDeleteConfirmation() {
    this.deleteConfirmation = false;
  }

  onListingDeleteClick(id: string) {
    this.apiService.deleteListing(id).subscribe(()=> {
      this.router.navigate(['/listings']);
    })
  }

  onComment(listingId: string) {
    if (this.commentForm.invalid) {
      return;
    }
  
    // Access form values using value property
    const formData = this.commentForm.value;

    this.apiService.createComment(listingId, formData.comment).subscribe()
    this.apiService.getAllComments(listingId).subscribe((comments)=> {
      this.comments = comments;
    })
  this.commentForm.reset();
  }

  onCommentDeleteClick(commentId: string) {
    this.apiService.deleteComment(commentId).subscribe((data) => {
      this.ngOnInit()
    })
  }
}
