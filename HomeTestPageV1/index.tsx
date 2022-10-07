import * as React from 'react'
import FormLogo from './../../../../../dist/form-logo.png'
import { Form, Label, Input, Span, Button, Select } from './styled'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type FormValues = {
	name: string
	email: string
	password: string
	confirmPassword: string
	gender: string
}

const schema = yup
	.object({
		name: yup.string().required('O nome é obrigatório'),
		email: yup
			.string()
			.email('Digite um e-mail válido')
			.required('O email é obrigatório'),
		password: yup
			.string()
			.min(6, 'A senha deve ter pelo menos 6 dígitos')
			.required('A senha é obrigatória'),
		confirmPassword: yup
			.string()
			.required('Confirmar a senha é obrigatório')
			.oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
		gender: yup.string().required('Selecionar o gênero é obrigatório'),
	})
	.required()

export const HomeTestPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
		defaultValues: {
			name: 'Lucas Natan',
			email: 'lucasnatan.dev@gmail.com',
		},
	})

	function onSubmit(userData: FormValues) {
		console.log(userData)
	}

	// Retorna os erros encontrados nos formulários
	console.log({ errors })

	// Watch - Utilizado no log das variáveis de inputs
	// console.log(watch())

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<img src={FormLogo} alt="imagem-logo" />

			<Label>
				Nome
				<Input
					type="text"
					placeholder="Nome"
					{...register('name', { required: true })}
				/>
				<Span>{errors.name?.message}</Span>
			</Label>

			<Label>
				Email
				<Input type="text" placeholder="Email" {...register('email')} />
				<Span>{errors.email?.message}</Span>
			</Label>

			<Label>
				Senha
				<Input type="password" {...register('password')} />
				<Span>{errors.password?.message}</Span>
			</Label>

			<Label>
				Confirmar senha
				<Input type="password" {...register('confirmPassword')} />
				<Span>{errors.confirmPassword?.message}</Span>
			</Label>

			<Label>
				Selecione seu gênero
				<Select {...register('gender')} id="gender">
					<option value="">Selecione</option>
					<option value="male">male</option>
					<option value="female">female</option>
				</Select>
			</Label>

			<Button type="submit">Cadastrar-se</Button>
		</Form>
	)
}
