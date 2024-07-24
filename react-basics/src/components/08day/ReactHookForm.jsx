import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
    const {register,handleSubmit, formState: { errors } ,trigger,getValues}=useForm()
    let handleForm=(data)=>{ alert(JSON.stringify(data))    }
  return ( <Container className='col-6'>
        <Form  onSubmit={handleSubmit(handleForm)}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" {...register('username',{required:"Username is required",minLength:{ value:5,message:"min 5 char"}
                })} onBlur={()=>trigger('username')}></Form.Control>
                {errors.username && <span className='text-danger'>{errors.username.message}</span>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text"  {...register('email',{required:"Email is required",
                    pattern:{value:/^[\w\!\#\$\%\^\.]+\@[\w]+\.[a-zA-Z]{2,3}$/,message:"Invalid Email"}
                })} onBlur={()=>trigger('email')}></Form.Control>
                {errors.email && <span className='text-danger'>{errors.email.message}</span>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"  {...register('password',{required:"password is required",minLength:{value:8,message:'min 8 char'},maxLength:{value:20,message:'max 20 char'}})} onBlur={()=>trigger('password')}></Form.Control>
                {errors.password && <span className='text-danger'>{errors.password.message}</span>}
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password"  {...register('cpassword',{required:"cpassword is required",
                    validate:(cpwd)=>{
                        let {password}=getValues()
                        return password==cpwd || "Password not match"
                    }
                })} onBlur={()=>trigger('cpassword')}></Form.Control>
                {errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>}
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
   </Container>
  )
}

export default ReactHookForm
