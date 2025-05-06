import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_PUBLIC_KEY } from '../../config/emailConfig';
import { Loader2 } from 'lucide-react';

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  honeypot?: string;
}

interface ContactFormProps {
  onSuccess: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormInputs>();

  useEffect(() => {
    emailjs.init(EMAIL_PUBLIC_KEY);
  }, []);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    if (data.honeypot) return;

    setIsSubmitting(true);
    setServerError('');

    try {
      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          service: data.service, // Include the service field in the email payload
          message: data.message,
        }
      );
      reset();
      onSuccess();
    } catch (error) {
      console.error('Failed to send email:', error);
      setServerError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
            errors.name ? 'border-red-500' : 'border-gray-700 bg-gray-900 text-gray-300'
          }`}
          placeholder="John Doe"
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' }
          })}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
            errors.email ? 'border-red-500' : 'border-gray-700 bg-gray-900 text-gray-300'
          }`}
          placeholder="johndoe@example.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
          placeholder="(123) 456-7890"
          {...register('phone', {
            pattern: {
              value: /^[\d\s+()-]*$/,
              message: 'Invalid phone number format'
            }
          })}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-1">
          Service You're Interested In <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
            errors.service ? 'border-red-500' : 'border-gray-700 bg-gray-900 text-gray-300'
          }`}
          {...register('service', { required: 'Please select a service' })}
        >
          <option value="">Select a service</option>
          <option value="Website Development">Website Development</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="Church Management Software">Church Management Software</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Other">Other</option>
        </select>
        {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
            errors.message ? 'border-red-500' : 'border-gray-700 bg-gray-900 text-gray-300'
          }`}
          placeholder="Tell us about your project or requirements..."
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters long' }
          })}
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <div className="hidden">
        <input type="text" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
      </div>

      {serverError && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-md font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <Loader2 size={20} className="animate-spin mr-2" />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};

export default ContactForm;
