export class CreateIdentityDto {
  firstName: string;
  middleName: string;
  lastName: string;
  aliases: string;
  dob: string;
  address: string; //
  gender: string;
  photoId: string;
  enrollmentDate: string;
  enrollmentBank: string; //
  phones: string; //
  emails: string; //
  fullName: string;
  bvn: string;
  customer: string; // generated customer id from Part 3
  identity: string; // generated identity id from Part 3
  nin: string;
  lgaOrigin: string;
  lgaResidence: string;
  nationality: string;
  stateResidence: string;
  stateOrigin: string;
}
