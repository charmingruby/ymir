import { PasswordHashEntity } from 'src/@core/entities/password-hash-entity';
import { Optional } from '../../../../@core/types/optional';
import { UniqueEntityID } from 'src/@core/entities/unique-entity-id';
interface UserProps {
  name: string;
  lastName: string;
  description?: string | null;
  email: string;
  password: PasswordHashEntity;
  birthDate: Date;
  country: string;
  lookingForWork: boolean;
  profileImage?: string | null;
  githubUser: string;
  roles: string[];
  level: string;
  experiences: string[];
  technologies: string[];
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  public id: UniqueEntityID;
  public props: UserProps;

  private constructor(
    props: Optional<UserProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    this.id = new UniqueEntityID(id.toString());
    this.props = {
      ...props,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  static create(props: Optional<UserProps, 'createdAt'>, id?: UniqueEntityID) {
    return new User(props, id);
  }

  public get name() {
    return this.props.name;
  }

  public get description() {
    return this.props.description;
  }

  public get lastName() {
    return this.props.lastName;
  }

  public get email() {
    return this.props.email;
  }

  public get password() {
    return this.props.password;
  }

  public get birthDate() {
    return this.props.birthDate;
  }

  public get country() {
    return this.props.country;
  }

  public get lookingForWork() {
    return this.props.lookingForWork;
  }

  public get profileImage() {
    return this.props.profileImage;
  }

  public get githubUser() {
    return this.props.githubUser;
  }

  public get roles() {
    return this.props.roles;
  }

  public get level() {
    return this.props.level;
  }

  public get experiences() {
    return this.props.experiences;
  }

  public get technologies() {
    return this.props.technologies;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }
}
